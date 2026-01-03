# 联系表单 API 配置说明

## 当前状态

表单系统已经创建完成，包括：
- ✅ 前端表单组件（`/contact` 页面）
- ✅ API 路由（`/api/contact`）
- ✅ 表单验证
- ✅ 用户反馈提示

## 配置邮件发送功能

目前 API 路由会接收表单数据并返回成功响应，但**还没有配置实际的邮件发送功能**。

### 选项 1：使用 Nodemailer（推荐用于生产环境）

1. **安装依赖**：
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **创建邮件服务文件** `src/lib/email.ts`：
   ```typescript
   import nodemailer from "nodemailer";

   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT || "587"),
     secure: false, // true for 465, false for other ports
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });

   export async function sendContactEmail(data: {
     name: string;
     contact: string;
     topic: string;
     message: string;
   }) {
     const mailOptions = {
       from: process.env.SMTP_FROM || "noreply@mapleworld.com",
       to: process.env.CONTACT_EMAIL || "hello@mapleworld.com",
       subject: `新咨询：${data.topic}`,
       html: `
         <h2>新的咨询表单提交</h2>
         <p><strong>姓名：</strong>${data.name}</p>
         <p><strong>联系方式：</strong>${data.contact}</p>
         <p><strong>话题：</strong>${data.topic}</p>
         <p><strong>消息：</strong></p>
         <p>${data.message.replace(/\n/g, "<br>")}</p>
       `,
     };

     return await transporter.sendMail(mailOptions);
   }
   ```

3. **在 API 路由中使用**：
   在 `src/app/api/contact/route.ts` 中取消注释并修改：
   ```typescript
   import { sendContactEmail } from "@/lib/email";
   
   // 在 POST 函数中
   await sendContactEmail({ name, contact, topic, message });
   ```

4. **配置环境变量** `.env.local`：
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@mapleworld.com
   CONTACT_EMAIL=hello@mapleworld.com
   ```

### 选项 2：使用 Resend（推荐，简单易用）

1. **安装依赖**：
   ```bash
   npm install resend
   ```

2. **创建邮件服务** `src/lib/email.ts`：
   ```typescript
   import { Resend } from "resend";

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function sendContactEmail(data: {
     name: string;
     contact: string;
     topic: string;
     message: string;
   }) {
     return await resend.emails.send({
       from: "MapleWorld <onboarding@resend.dev>",
       to: process.env.CONTACT_EMAIL || "hello@mapleworld.com",
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
   ```

3. **配置环境变量** `.env.local`：
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=hello@mapleworld.com
   ```

### 选项 3：使用 SendGrid

1. **安装依赖**：
   ```bash
   npm install @sendgrid/mail
   ```

2. **创建邮件服务** `src/lib/email.ts`：
   ```typescript
   import sgMail from "@sendgrid/mail";

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

   export async function sendContactEmail(data: {
     name: string;
     contact: string;
     topic: string;
     message: string;
   }) {
     const msg = {
       to: process.env.CONTACT_EMAIL || "hello@mapleworld.com",
       from: process.env.SENDGRID_FROM || "noreply@mapleworld.com",
       subject: `新咨询：${data.topic}`,
       html: `
         <h2>新的咨询表单提交</h2>
         <p><strong>姓名：</strong>${data.name}</p>
         <p><strong>联系方式：</strong>${data.contact}</p>
         <p><strong>话题：</strong>${data.topic}</p>
         <p><strong>消息：</strong></p>
         <p>${data.message.replace(/\n/g, "<br>")}</p>
       `,
     };

     return await sgMail.send(msg);
   }
   ```

3. **配置环境变量** `.env.local`：
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   SENDGRID_FROM=noreply@mapleworld.com
   CONTACT_EMAIL=hello@mapleworld.com
   ```

## 测试

1. 启动开发服务器：`npm run dev`
2. 访问 `/contact` 页面
3. 填写并提交表单
4. 检查：
   - 浏览器控制台是否有错误
   - 服务器控制台是否打印了表单数据
   - 如果配置了邮件服务，检查收件箱

## 安全建议

- 使用环境变量存储敏感信息（API keys、密码等）
- 添加 rate limiting 防止垃圾邮件
- 考虑添加 reCAPTCHA 验证
- 在生产环境中使用 HTTPS



