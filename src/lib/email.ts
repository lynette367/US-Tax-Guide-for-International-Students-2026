import { Resend } from "resend";

type ContactPayload = {
  name: string;
  contact: string;
  topic: string;
  message: string;
};

export async function sendContactEmail(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY 未配置，跳过邮件发送。");
    return;
  }

  const resend = new Resend(apiKey);

  return await resend.emails.send({
    from: "MapleWorld <noreply@mapleworld.online>",
    to: process.env.CONTACT_EMAIL || "yqying95@gmail.com",
    subject: `新咨询：${data.topic}`,
    html: `
      <h2>新的咨询表单提交</h2>
      <p><strong>姓名：</strong>${data.name}</p>
      <p><strong>联系方式：</strong>${data.contact}</p>
      <p><strong>话题：</strong>${data.topic}</p>
      <p><strong>消息：</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
