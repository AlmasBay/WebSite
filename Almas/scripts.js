function toggleDescription(projectId) {
    const project = document.getElementById(projectId);
    const img = project.querySelector('.project-gif');
    const description = project.querySelector('.description');
    const button = project.querySelector('.toggle-btn');

    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        img.classList.add('expanded');
        button.classList.add('hidden'); // Добавляем класс для скрытия кнопки
        img.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        description.style.display = "none";
        img.classList.remove('expanded');
        button.classList.remove('hidden'); // Удаляем класс для отображения кнопки
        project.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
