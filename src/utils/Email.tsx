export const sendEmail = () => {
    const link = "mailto:hugo.ca@yahoo.com"
             + "&subject=" + encodeURIComponent("I have some work for Hugo");
    window.location.href = link;
}