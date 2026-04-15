require('dotenv').config();
const { writeFileSync, mkdirSync } = require('fs');

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const environment = {
  baseUrl: "${process.env['BASE_SERVER_URL']}",
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath, envFileContent);
