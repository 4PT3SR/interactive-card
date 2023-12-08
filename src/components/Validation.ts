import * as Yup from 'yup'
const validYear = (value:number) => {
    const currentYear = Number(new Date().getFullYear().toString().slice(-2));
    
    return value >= currentYear 
  };
export const validationSchema = Yup.object().shape({
    name:Yup.string().required('Required!').min(3,'too short!').matches(/^[a-zA-Z ]+$/,'Only alphabets!'),
    cardNumber:Yup.string().required("Can't be blank!").min(16,'Atleast 16 digits').matches(/^[0-9]+$/,'Only numbers!'),
    month:Yup.number().required("Can't be blank!").max(12,'not a valid month').min(1,'not a valid month'),
    year:Yup.number().required("Can't be blank!").test('is-valid-year',"year can't be in the past",validYear),
    cvv:Yup.string().required("Can't be blank!").min(3, 'Atleast 3 digits').matches(/^[0-9]+$/,'Only numbers!'),
})
// 