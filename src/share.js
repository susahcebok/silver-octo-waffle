let shareData = {
        title: 'Profile Pic Generator',
        text: 'Profile Pic Generator',
        url: 'https://susahcebok.pages.dev/',
      }

      const btn = document.querySelector('span');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'MDN shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: ' + e
          )
      });
