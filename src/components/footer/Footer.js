import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Healthihost</strong> by <a href="https://github/shanemoyo.com">Shane Moyo</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer;