import React from 'react'

const images = ['/Images/Quas_icon.png', '/Images/Wex_icon.png', '/Images/Exort_icon.png'
]

export default function OrbRows() {
    return (
        <ul className='flex gap-2 mx-3 mt-3'>
            {
                images.map(img =>
                    <img className='rounded-full' src={img}></img>
                )}

        </ul>
    )
}
