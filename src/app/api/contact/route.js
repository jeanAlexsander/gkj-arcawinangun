import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nama, kontak, pesan } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Website GKJ <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: kontak,
      subject: `Pesan dari ${nama}`,
      html: `
        <h3>Pesan Baru dari Website</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Kontak:</strong> ${kontak}</p>
        <p><strong>Pesan:</strong></p>
        <p>${pesan}</p>
      `,
    });

    return Response.json({ message: "Pesan berhasil dikirim!" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Gagal mengirim pesan" }, { status: 500 });
  }
}
