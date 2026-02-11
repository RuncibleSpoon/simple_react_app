/**
 * DEMO ONLY: Intentional command-injection vulnerability for security testing (e.g. Endor).
 * Do NOT use in production. Server passes user input unsanitized to child_process.exec.
 */
import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// VULNERABLE: user input is concatenated into a shell command (command injection)
app.post('/api/ping', (req, res) => {
  const { host } = req.body || {};
  if (!host) {
    return res.status(400).json({ error: 'Missing host' });
  }
  // BAD: host is not sanitized - e.g. "8.8.8.8; id" or "8.8.8.8 && cat /etc/passwd"
  exec(`ping -c 1 ${host}`, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: err.message, stderr: stderr || '' });
    }
    res.json({ output: stdout });
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Demo server (with intentional vuln) on http://localhost:${PORT}`));
