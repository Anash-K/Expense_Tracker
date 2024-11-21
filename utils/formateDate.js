export const formatDate = (date) => {
  return new Date(date).toString().split(" ").slice(0,-1).join(" ");
};

export const getFormateDate = (date) => {
  return date.toISOString().slice(0, 10);
};


 export const getDateMinusDays=(date,days) =>{
  return new Date(date.getFullYear() , date.getMonth() , date.getDate() - days);  
 }