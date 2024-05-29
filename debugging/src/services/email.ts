async function getBaseEmail(senderName: string): Promise<string> {
    let base = `Olá ${senderName}, gostaria de me inscrever para uma vaga.`;
    base += "\n Estou deixando o meu curriculo."
    return base;
}

export { getBaseEmail }