import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddColor() {
  const [color, setcolor] = useState("");

  const styles = {
    backgroundColor: color,
    width: "350px",
    fontSize:"20px",
  };

  const [colorList, setColorList] = useState(["red", "dodgerblue", "pink"]);
  return (
    <div className='color-gamebox'>
      <h3>Welcome to Color game, pleace Enter the color name in text filed, then click the ADD COLOR Button</h3>
      <div className='color-game'>
        <TextField id="outlined-basic" label="Enter the color name" variant="outlined"  style={styles} onChange={(event) => setcolor(event.target.value)} value={color} />
        <Button variant='contained' onClick={() => setColorList([...colorList, color])}>Add Color</Button>
      </div>
      <div>
        {colorList.map((clr,index) => (<ColorBox color={clr} key={index} />))}
      </div>
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    marginLeft:"50px",
    height: '35px',
    width: '355px',
    margin: '5px 0px',
    backgroundColor: color,
  };
  return (
    <div style={styles}></div>
  );
}
