const colors = [
    "#FF6347", // Tomato
    "#FFA07A", // Light Salmon
    "#FFD700", // Gold
    "#ADFF2F", // Green Yellow
    "#20B2AA", // Light Sea Green
    "#4682B4", // Steel Blue
    "#9370DB", // Medium Purple
    "#FF69B4", // Hot Pink
    "#8A2BE2", // Blue Violet
    "#00CED1", // Dark Turquoise
    "#00FF7F", // Spring Green
    "#B22222", // Fire Brick
    "#FF4500", // Orange Red
    "#2E8B57", // Sea Green
    "#800080", // Purple
    "#7B68EE", // Medium Slate Blue
    "#4169E1", // Royal Blue
    "#FF8C00", // Dark Orange
    "#008080", // Teal
    "#8B4513"  // Saddle Brown
];
document.getElementById("btn").addEventListener("click",()=>{
    let random=Math.floor(Math.random()*20)
    let bgColor=colors[random]
    document.body.style.backgroundColor=`${bgColor}`
})