const Details =(props)=>{

const  {status,premiered,network} =props;
return<div>

    <p>
        Status :{status}
        <p>
            Premiered: {premiered} { !!network && `on ${network.name}` }
        
        </p>
    </p>
</div>
};
export default Details;