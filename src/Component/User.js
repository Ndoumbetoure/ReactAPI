import React from 'react'

const User = ({user}) => {


  return (
    <> 
        <div className="divPrincipal">
            <div className='image-container d-flex justify-content-start m-3'>
                <figure>
                     <h4>User numéro {user.id}<i class="fa fa-user" aria-hidden="true" style={{marginLeft : '10px'}}></i></h4>
                    <div>
                        <span>Name: {user.name} <br /></span>
                        <span>UserName : {user.username} <br /></span>
                        <span>Email : {user.email} <br /></span>
                        <span>Phone : {user.phone}<br /></span>
                        <span>Website : {user.website}</span>
                    </div>
                </figure>
            </div>
        </div>
    </>
  )
}

export default User