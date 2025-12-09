import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, topic, message } = body;

    // 基本验证
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      );
    }

    // 邮箱格式验证（简单验证）
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (contact.includes("@") && !emailRegex.test(contact)) {
      return NextResponse.json(
        { error: "请输入有效的邮箱地址" },
        { status: 400 }
      );
    }

    // 这里可以添加邮件发送逻辑
    // 例如使用 nodemailer、Resend、SendGrid 等服务
    // 目前先返回成功，实际邮件发送需要配置邮件服务

    // 示例：打印到控制台（开发环境）
    console.log("收到表单提交：", {
      name,
      contact,
      topic,
      message,
      timestamp: new Date().toISOString(),
    });

    // 发送邮件
    try {
      await sendContactEmail({ name, contact, topic, message });
    } catch (emailError) {
      console.error("邮件发送失败：", emailError);
      // 即使邮件发送失败，也返回成功，避免用户重复提交
      // 可以在后台处理邮件重试
    }

    return NextResponse.json(
      {
        success: true,
        message: "表单提交成功！我们会在 24 小时内与你联系。",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("表单提交错误：", error);
    return NextResponse.json(
      { error: "提交失败，请稍后重试" },
      { status: 500 }
    );
  }
}


