
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    

    function animateOnScroll() {
        teamMembers.forEach(member => {
            const memberPosition = member.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(memberPosition < screenPosition) {
                member.style.opacity = '1';
                member.style.transform = 'translateY(0)';
            }
        });
    }
    

    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        member.style.transition = 'all 0.5s ease';
    });
    
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    

    const trustCards = document.querySelectorAll('.trust-card');
    trustCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
