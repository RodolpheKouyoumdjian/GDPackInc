import React from 'react'

function Card({source, description}) {
  return (
    <div class="card">
        <div class="product" >
            <div class="product_text">
                <p>
                  {description}
                </p>
            </div>
            <div class="product_image">
                <img src={source} alt={source} />
            </div>
        </div>
    </div>
  )
}

export default Card