import crypto from 'crypto';

export default function handler(req, res) {
  const token = '3ucDBZZM2k6dHO3xoM0m0dwqWi54L';
  const { msg_signature, timestamp, nonce, echostr } = req.query;
  
  const arr = [token, timestamp, nonce, echostr].sort();
  const str = arr.join('');
  const signature = crypto.createHash('sha1').update(str).digest('hex');
  
  if (signature === msg_signature) {
    res.status(200).send(echostr);
  } else {
    res.status(403).send('forbidden');
  }
}
