function BoxColor ({color, value}) {
  return (
    <>
      <h3
        className={`box ${color}`}
        style={{
          backgroundColor: color === value ? color : undefined,
          borderColor: color,
          color: color === value ? 'black' : color
        }}>
        {color === value ? `Yes I'm the ${value} color` : `I'm not the ${value} color`}
      </h3>
    </> 
  )
}
export default BoxColor;  
