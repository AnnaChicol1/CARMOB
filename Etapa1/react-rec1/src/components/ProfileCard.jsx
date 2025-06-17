import React, {useState} from "react";

const styles = {
    card: {
      width: "280px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      margin: "1rem auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff"
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0.5rem"
    },
    name: {
      margin: "0.5rem 0",
      color: "black"
    },
    followers: {
      margin: "0.25rem 0",
      color: "#555"
    },
    button: {
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "4px",
      color: "#fff",
      cursor: "pointer"
    }
};

function ProfileCard({name, avatar, initialFollowers = 0}) {
    const [followers, setFollowers] = useState(initialFollowers);
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        if (isFollowing) {
            setFollowers(prev => prev - 1);
            setIsFollowing(false);
        } else {
            setFollowers(prev => prev + 1);
            setIsFollowing(true);
        }
    }

    return (
    <div style={styles.card}>
        <img src={avatar} style={styles.avatar} />
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.followers}>
            Seguidores: <strong>{followers}</strong>
        </p>
        <button
            onClick={toggleFollow}
            style={ {
                ...styles.button,
                backgroundColor: isFollowing ? '#e74c3c' : '#3498db'
            } }
        >
            {isFollowing ? 'Deixar de seguir' : 'Seguir'}
        </button>
        </div>
    );

}

export default ProfileCard;