// مثال بسيط للتفاعل: تتبع النقر على أي زر
document.querySelectorAll('.circle-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('تم النقر على أحد الأزرار.');
        // يمكن هنا إضافة أي منطق إضافي مثل إظهار رسالة
    });
});
