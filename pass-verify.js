const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$S.EKpfyjULq5NDup2E6skOCePSgXTgYzS9dInn1Hu6K3443B8Mob.';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

hashPassword();
