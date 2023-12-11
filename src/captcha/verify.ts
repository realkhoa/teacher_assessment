import hcaptcha from 'hcaptcha';
import config from '@app/utils/credentials';
import log from '@app/utils/logging';

export default function verify(token: string): Promise<void> {
  return new Promise((resolve, reject) => {
    hcaptcha.verify(config.hcaptchaSecret, token)
      .then((data) => {
        if (data.success) resolve();
        reject("Task failed successfully!");
      })
  })
}