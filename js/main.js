$(function () {
    
    // 1. مصفوفة البيانات (13 وظيفة متخصصة)
    const jobsData = [
        { id: 1, title: "عامل ترميم", category: "بناء", area: "حي الشجاعية", wage: "60 ₪", status: "متاح" },
        { id: 2, title: "مهندس مدني", category: "بناء", area: "مخيم الشاطئ", wage: "120 ₪", status: "مكتمل" },
        { id: 3, title: "مسّاح أراضي", category: "بناء", area: "الرمال", wage: "90 ₪", status: "متاح" },
        { id: 4, title: "كهربائي تمديدات", category: "بناء", area: "خانيونس", wage: "80 ₪", status: "متاح" },
        { id: 5, title: "مخطط عمراني", category: "بناء", area: "رفح", wage: "110 ₪", status: "مكتمل" },
        { id: 6, title: "مهندس مدني (إشراف)", category: "بناء", area: "شمال غزة", wage: "120 ₪", status: "متاح" },
        { id: 7, title: "صحفي / موثق قصص", category: "إعلام", area: "غزة", wage: "90 ₪", status: "متاح" },
        { id: 8, title: "طبيب عام", category: "صحة", area: "المواصي", wage: "100 ₪", status: "متاح" },
        { id: 9, title: "مصور صحفي", category: "إعلام", area: "خانيونس", wage: "85 ₪", status: "مكتمل" },
        { id: 10, title: "فني طاقة شمسية", category: "بناء", area: "الوسطى", wage: "90 ₪", status: "متاح" },
        { id: 11, title: "مسؤول متابعة وتقييم", category: "بناء", area: "غزة", wage: "100 ₪", status: "متاح" },
        { id: 12, title: "مشرف موقع العمل", category: "بناء", area: "الشجاعية", wage: "95 ₪", status: "متاح" },
        { id: 13, title: "رئيس العمال", category: "بناء", area: "بيت لاهيا", wage: "85 ₪", status: "متاح" }
    ];

    // 2. دالة العرض
    const renderTable = (data) => {
        $('#jobs-table-body').empty();
        
        data.forEach(job => {
            const statusBadge = job.status === "متاح" ? "bg-success" : "bg-danger";
            
            const row = `
                <tr>
                    <td>${job.id}</td>
                    <td>${job.title}</td>
                    <td><span class="badge bg-primary">${job.category}</span></td>
                    <td>${job.area}</td>
                    <td>${job.wage}</td>
                    <td><span class="badge ${statusBadge}">${job.status}</span></td>
                </tr>`;
            
            $(row).hide().appendTo('#jobs-table-body').fadeIn(400);
        });
    };

    renderTable(jobsData);

    // 3. الفلترة
    $('.filter-btn').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        const cat = $(this).data('category');
        const result = cat === 'all' ? jobsData : jobsData.filter(job => job.category === cat);
        renderTable(result);
    });

    // 4. نموذج التسجيل
    $('#jobForm').submit(function (e) {
        e.preventDefault();
        const name = $('#name').val();

        if (name.length < 3) return alert("الرجاء إدخال اسم صحيح!");

        $('#formMessage').html(`
            <div class="alert alert-success alert-dismissible fade show">
                شكراً يا <strong>${name}</strong>! تم استلام طلبك في منصة <strong>البُنيان</strong> وسنتواصل معك قريباً.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `).slideDown();

        this.reset();
    });

    // 5. تمرير سلس
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 70 }, 800);
    });
});