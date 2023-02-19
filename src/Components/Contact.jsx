import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <form>
                <div>
                    <label>Name</label>
                        <input type="text" required placeholder='abc' />
                </div>

                <div>
                    <label>Email</label>
                        <input type="email" required placeholder='abc@gmail.com' />
                </div>
                <div>
                    <label>Message</label>
                        <input type="text" required placeholder='tell us about your query..' />
                    <button type='submit'>Send</button>
                </div>
            </form>
        </main>
    </div>
  )
}

export default Contact