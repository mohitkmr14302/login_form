// import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import State from "./State";
import City from './City'
import { useState } from "react";
// import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
const schema = yup.object().shape({
    name: yup.string().required("This is required feild"),
    phone: yup.string().required("This is required feild"),
    Pincode: yup.string().required("This is required feild"),
    // state: yup.string().required("This is required feild"),
    // city: yup.string().required("This is required feild"),
});

const initialvalue = {
    name: "",
    city: "",
    Address1: "",
    Address2: "",
    state: "",
    Pincode: "",
    phone: ""
}

const Home = () => {
    const [set, updateset] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        initialvalue.name = data.name
        initialvalue.city = data.city
        initialvalue.state = data.state
        initialvalue.Pincode = data.Pincode
        initialvalue.phone = data.phone
        initialvalue.Address1 = data.Address1
        initialvalue.Address2 = data.Address2
        console.log(initialvalue);
        updateset(true);
        // history.push('/table');
    }
    return (
        // console.log(set);
        <div className="wrapper">

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">Name <span className="symbol">*</span></label></p>
                    <p className="inputpara">
                        <input className="input" name="name" type="text" {...register('name')} />
                    </p>
                    {errors.name?.message && <p className="msg">{errors.name?.message}</p>}
                </div>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">Contact Number <span className="symbol">*</span></label></p>
                    <p className="inputpara">
                        <input className="input" name="phone" type="text" {...register('phone')} />
                    </p>
                    {errors.phone?.message && <p className="msg">{errors.phone?.message}</p>}
                </div>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">State<span className="symbol">*</span></label></p>
                    <p className="inputpara">
                        <State {...register('state')} /> 
                        {/* <input className="input" name="state" type="text" {...register('state')} /> */}
                    </p>
                    {errors.state?.message && <p>{errors.state?.message}</p>}
                </div>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">City<span className="symbol">*</span></label></p>
                    <p className="inputpara">
                        <City  {...register('city')} />
                        {/* <input className="input" name="city" type="text" {...register('city')} /> */}
                    </p>
                    {errors.city?.message && <p>{errors.city?.message}</p>}
                </div>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">Line 1 Address</label></p>
                    <p className="inputpara">
                        <input className="input" name="Line 1 Address" type="text"  {...register('Address1')} />
                    </p>
                </div>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">Line 2 Address</label></p>
                    <p className="inputpara">
                        <input className="input" name="Line 2 Address" type="text"  {...register('Address2')} />
                    </p>
                </div>
                <div>
                    <p className="labelpara"><label classNmae="label" htmlFor="">Pincode<span className="symbol">*</span></label></p>
                    <p className="inputpara">
                        <input className="input" name="Pincode" type="text" {...register('Pincode')} />
                    </p>
                    {errors.Pincode?.message && <p className="msg">{errors.Pincode?.message}</p>}
                </div>
                <input className="btn" type="reset" />
                <input className="btn" type="submit" />
            </form>
            {set !== true ? null :
                (<table >

                    <tr>
                        <td>Name</td>
                        <td>{initialvalue.name}</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>{initialvalue.phone}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{initialvalue.state}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{initialvalue.city}</td>
                    </tr>
                    <tr>
                        <td>Line 1 Address</td>
                        <td>{initialvalue.Address1}</td>
                    </tr>
                    <tr>
                        <td>Line 2 Address</td>
                        <td>{initialvalue.Address2}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td>{initialvalue.Pincode}</td>
                    </tr>
                </table>
                )}
        </div>

    );
};

export default Home;
