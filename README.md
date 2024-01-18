# Status Page for Pterodactyl
## :warning:NOTE: THIS PROJECT IS BEING REWRITTEN FROM SCRATCH
Status Page for AkaKitsune aims to help users to know the status for each servers hosted on AkaKitsune. Works on Pterodactyl v1+.

## Hosting/Installation
You can use this repository as a template for your own Pterodactyl status page. Follow the step below to install or self-host your own status page.

### Dependencies
- PHP 8.0+
- A working Pterodactyl Panel

### Installation
1. Install dependencies
2. Clone this repository
```sh
git clone https://github.com/alzhahir/status
```
3. Edit `index.html` according to your needs, and optionally, use your own `styles.css` for the page. You can also modify my `styles.css` from my [API assets repository](https://github.com/alzhahir/apiassets).
4. Create an `.ini` file or rename `.ini.example` to `.ini`
```ini
apikey = "<INSERT YOUR API KEY HERE>"
hostname = "<INSERT YOUR PANEL HOSTNAME HERE>"
```
5. Setup the `public` directory for the web server. For example, Apache on Ubuntu:
```sh
sudo ln -s ~/status/public /var/www/public
```
6. Setup the appropriate Virtual Host for the status page.

## Contributing
You can open an issue or a pull request if you find any serious problem in my code. I will try to review the code and give feedback.