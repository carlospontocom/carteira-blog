
import emailjs from '@emailjs/browser';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Inicializa o EmailJS com a chave pública
emailjs.init({
  publicKey: publicKey,
});

// Função reutilizável para enviar e-mails
export async function enviarEmail(dados) {
  if (!publicKey || !serviceID || !templateID) {
    throw new Error(
      'As configurações do EmailJS não foram encontradas.'
    );
  }

  return emailjs.send(
    serviceID,
    templateID,
    dados
  );
}
