const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} width={750} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h4>Rating</h4>
                            <h3>Not Rated</h3>
                        <br />
                        <h2>Description</h2>
                            <h3>Serving {data.place.cuisines}</h3>
                            <h4>
                                {data.place.showEstablished()}
                            </h4>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            Edit
                            </a> 
                            <br/>  
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>     
                        <h2>Comments</h2>
                        <h3 className="inactive">
                                No comments yet!
                        </h3>
                    </div>
                </div>        
            </main>
        </Def>
    )
}
module.exports = show