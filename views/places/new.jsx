const React= require('react')
const Def= require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Restaurant</h1>
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor='name'>Restaurant Name</label>
                        <input className='form-control' id='name' name='name' required />
                    </div>
                    <div className='form-group'>   
                        <label htmlFor='cuisine'>Cuisine</label>
                        <input className='form-control' id='cuisine' name='cuisine' required />
                    </div>
                    <div className='form-group'>    
                        <label htmlFor='picture'>Restaurant Picture</label>
                        <input className='form-control' type='url' id='picture' name='picture'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id='city' name='city'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id='state' name='state'/>
                    </div>    
                        <input className='btn btn-primary' type='submit' value='Add Restaurant' />

                </form>
            </main>
        </Def>
    )
}

module.exports= new_form