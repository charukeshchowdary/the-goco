import { spawn } from 'child_process';
import { exec } from 'child_process';

async function main() {
  console.log('\n======================================================');
  console.log(' ✨ THE GOCO — Vercel Production Deployment Initiator');
  console.log('======================================================\n');

  // Step 1: Check whoami
  const whoami = await runCommand('npx', ['vercel', 'whoami']);
  if (!whoami.success) {
    console.log('🔐 Vercel authorization needed. Launching one-click authorization...\n');
    
    await new Promise((resolve, reject) => {
      const loginProc = spawn('cmd.exe', ['/c', 'npx', 'vercel', 'login'], {
        stdio: ['inherit', 'pipe', 'pipe']
      });

      let browserOpened = false;

      const handleData = (chunk) => {
        const text = chunk.toString();
        process.stdout.write(text);

        const match = text.match(/https:\/\/vercel\.com\/oauth\/device\?user_code=([A-Z0-9-]+)/i);
        if (match && !browserOpened) {
          browserOpened = true;
          const url = match[0];
          console.log(`\n🌐 Opening authorization URL in your browser: ${url}\n`);
          exec(`start "" "${url}"`);
        }
      };

      loginProc.stdout.on('data', handleData);
      loginProc.stderr.on('data', handleData);

      loginProc.on('close', (code) => {
        if (code === 0) {
          console.log('\n✅ Vercel login successful!\n');
          resolve();
        } else {
          reject(new Error(`Login exited with code ${code}`));
        }
      });
    });
  } else {
    console.log('✅ Already logged into Vercel!\n');
  }

  // Step 2: Deploy to Production
  console.log('🚀 Deploying THE GOCO to Vercel Production (--prod)...\n');
  const deployProc = spawn('cmd.exe', ['/c', 'npx', 'vercel', '--prod', '--yes'], {
    stdio: 'inherit'
  });

  deployProc.on('close', (code) => {
    if (code === 0) {
      console.log('\n🎉 Successfully deployed THE GOCO live to Vercel!\n');
    } else {
      console.error(`\n❌ Deployment exited with code ${code}\n`);
    }
  });
}

function runCommand(cmd, args) {
  return new Promise((resolve) => {
    const proc = spawn('cmd.exe', ['/c', cmd, ...args], { stdio: 'pipe' });
    let output = '';
    proc.stdout.on('data', (d) => output += d.toString());
    proc.stderr.on('data', (d) => output += d.toString());
    proc.on('close', (code) => {
      resolve({ success: code === 0, output });
    });
  });
}

main().catch((err) => {
  console.error('Error during deployment:', err.message);
});
