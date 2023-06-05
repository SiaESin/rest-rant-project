const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Uh oh, we cannot find this page!</p>
              <div>
                    <img src="/images/enjoying-sunset.jpg" alt="Person enjoying the sunset" height={600} width={850} />
                    <div>
                    Photo by <a href="https://unsplash.com/@coopery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohamed Nohassi</a> on <a href="https://unsplash.com/photos/odxB5oIG_iA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>  
        
          </main>
      </Def>
    )
  }

module.exports = error404

