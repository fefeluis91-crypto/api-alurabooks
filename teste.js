function emailExiste(email, usuarios) {
  if (!email || typeof email !== 'string') return false;

  return usuarios.some(
    (usuario) => usuario.email === email
  );
}

function usuarioExiste(email, senha, usuarios) {
  if (!email || !senha) return false;
  if (typeof email !== 'string') return false;
  if (typeof senha !== 'number') return false;

  return usuarios.some(
    (usuario) =>
      usuario.email === email && usuario.senha === senha
  );
}

module.exports = {
  emailExiste,
  usuarioExiste
};
