import pizzalogo from './images/pizzalogo.jpg' //pizzalogo
import C from './images/C.png'
import cola01 from './images/cola01.png'
import F from './images/F.png'
import H from './images/H.png'
import P from './images/P.png'
import R from './images/R.png'
import Button from '@mui/material/Button';
import { useState } from "react";

function Home(){ 
    const [pizza, setPizza] = useState(''); //name pizza
    const [pizzaPrice, setPizzaPrice] = useState(''); // price pizza
    const [water, setWater] = useState(''); // name water
    const [waterPrice, setWaterPrice] = useState(''); // price water
    const [total, setTotal] = useState('');

    const bg = {
    backgroundColor: "#FFDEAD",
    };

    const bg1 = {
        backgroundColor: "#E0FFFF",
        };
    
    function PizzaSelect(number){
        if(number == 1){
            setPizza("ฮาวาเอี้ยน");
            setPizzaPrice(400);
        }
        else if(number == 2){
            setPizza("ชีส");
            setPizzaPrice(450);
        }
        else if(number == 3){
            setPizza("เปปเปอโรนี");
            setPizzaPrice(430);
        }
    }

    function WaterSelect(number){
        if(number == 1){
            setWater("โคล่า");
            setWaterPrice(25);
        }
        else if(number == 2){
            setWater("แฟนต้าส้ม");
            setWaterPrice(18);
        }
        else if(number == 3){
            setWater("แฟต้าแดง");
            setWaterPrice(18);
        }
    }
    function TotalCal(){
        setTotal(pizzaPrice + waterPrice);
    }

    /*คอลลั่ม = แนวนอน แถว = แนวตั้ง*/
    return(        
        <div style={bg}> 
            <center><table border={0}>
            <tr>
                <td><center>PIZZA</center></td>
            </tr>
            <tr>
                <td><img src={pizzalogo} height="250"></img></td>
            </tr>
            <tr>
                <td><center>Menu</center></td>
            </tr>
            </table> </center>
            <center><table border={0}>
            <tr>
                <td><img src={H}  height="120"></img></td>
                <td><center>พิซซ่าหน้า ฮาวายเอี้ยน</center></td>
                <td><Button variant="contained" onClick={() => PizzaSelect(1)}>เลือก</Button></td>
                <td><center><img src={cola01}  height="120"></img></center></td>
                <td>โค้ก</td>
                <td><Button variant="contained"onClick={() => WaterSelect(1)}>เลือก</Button></td>
            </tr>
            <tr>
                <td><img src={C}  height="120"></img></td>
                <td><center>พิซซ่าหน้า ชีส</center></td>
                <td><Button variant="contained"onClick={() => PizzaSelect(2)}>เลือก</Button></td>
                <td><img src={F}  height="120"></img></td>
                <td>แฟนต้าส้ม</td>
                <td><Button variant="contained"onClick={() => WaterSelect(2)}>เลือก</Button></td>
            </tr>
            <tr>
                <td><img src={P}  height="120"></img></td>
                <td>พิซซ่าหน้า เปปเปอโรนี</td>
                <td><Button variant="contained"onClick={() => PizzaSelect(3)}>เลือก</Button></td>
                
                <td><center><img src={R}  height="120"></img></center></td>
                <td>แฟนต้าแดง</td>
                <td><Button variant="contained"onClick={() => WaterSelect(3)}>เลือก</Button></td>
            </tr>
            </table> </center>
            <div><center><table border={0} style={bg1}>
            <tr>
        
                <td>พิซซ่าหน้า{pizza} ราคา {pizzaPrice} บาท</td> 
                <td></td>
            </tr>
            <tr>
                <td>น้ำดื่ม{water} ราคา {waterPrice} บาท</td>
                <td></td>
            </tr>
            <tr>
                <td>รวม {total}</td>
                <td><Button variant="contained"onClick={TotalCal}>สั่งซื้อ</Button></td>
            </tr>
            </table></center></div>
        </div>
    );
}
export default Home;