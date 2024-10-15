function skillsMemeber() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var member = { member: member, skills: skills };
    var memberString = JSON.stringify(member);
    localStorage.setItem("member", memberString);
    return false;
}