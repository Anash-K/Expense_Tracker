export const formatDate = (date) => {
  return new Date(date).toString().split(" ").slice(0,-1).join(" ");
};


 export const getDateMinusDays=(date,days) =>{
  return new Date(date.getFullYear() , date.getMonth() , date.getDate() - days);  
 }