$(document).ready(function() {
    function timeClock() {
        var getTime = new Date();
        let hours = getTime.getHours() * 30;
        let minute = getTime.getMinutes() * 6;
        let second = getTime.getSeconds() * 6;
        $('.circle-1 span').css('transform', `rotateZ(${hours + minute/12}deg)`);
        $('.circle-2 span').css('transform', `rotateZ(${minute +second/60}deg)`);
        $('.circle-3 span').css('transform', `rotateZ(${second}deg)`);
        hours = hours / 30 < 10 ? '0' + hours / 30 : hours / 30;
        minute = minute / 6 < 10 ? '0' + minute / 6 : minute / 6;
        second = second / 6 < 10 ? '0' + second / 6 : second / 6;
        $('.hour').text(`${hours}`);
        $('.minute').text(`${minute}`);
        $('.second').text(`${second}`);
        $('.ampm').text((hours / 30) >= 12 ? 'pm' : 'am');
    }
    setInterval(timeClock);
})