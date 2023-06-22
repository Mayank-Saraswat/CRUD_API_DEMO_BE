 const {getData, postData, putData, deleteData} = require('../repositories/crud')

 const getDatase = async()=>{
    const query = ` select * from apiData `;
    const result = await getData(query);
    return result;
 }

 const postDatase = async({name, email, mobile}) =>{
   const query = `INSERT INTO apiData(name, email, mobile) VALUES('${name}', '${email}' , ${mobile} , '${password}')`;
   const result = await postData(query);
   return result;
 }

 const putDatase = async(Id, data) =>{

   const query = `UPDATE apiData SET name = '${data.name}', email = '${data.email}' , mobile = ${data.mobile}, password = '${data.password}' WHERE ID= ${Id}`;
   const result = await putData(query);
   return result;
 }

 const deleteDatase = async(Id) =>{

  const query = `DELETE from apiData WHERE ID= ${Id}`;
  const result = await deleteData(query);
  return result;
}

module.exports = {
  getDatase,
  postDatase,
  putDatase,
  deleteDatase
}