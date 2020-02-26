// import React from 'react'

// const search = ({ item, selectProductItem }) => {
//   const onChangeSearch = (event) => {
//     event.preventDefault()
//     selectProductItem(item)

//     axios
//       .get(`http://localhost:5000/product/?name=${event.target.value}`)
//       .then(response => {
//         this.setState({ product: response.data.result })
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   return (
//     <form className='form-inline my-3 my-lg-0'>
//       <input className='form-control mr-sm-2' type='text' placeholder='Search Name' aria-label='Search' onChange={this.onChangeSearch} />
//     </form>
//   )
// }

// export default search
