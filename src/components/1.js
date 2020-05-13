<div 
style={{display: inline ? 'inline' : 'block'}}
>
<div
    style={{display: inline ? 'inline' : 'block'}}
>
    <label htmlFor={label}>{label}</label>
</div>

<input id={label}
    value={value}
    onChange={(event) => setOnChange(event.target.value)} 
/>
</div>