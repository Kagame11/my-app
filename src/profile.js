const user ={
    name: 'Lebron James',
     imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nba.com%2Fplayer%2F2544%2Flebron-james&psig=AOvVaw0YMiFH5Z9jq8oOpW1ptK7Q&ust=1709215046499000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDr-M-ez4QDFQAAAAAdAAAAABAE',
     imageSize: 90,
   };
  
  export default function Profile(){
   
    return(
      <>
      <h1>{user.name}</h1>
      <img
      className="avatar"
      src={user.imageURL}
      alt={'photo of' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
      />
      </>
    );
  }
  