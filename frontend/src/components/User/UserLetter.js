const getInitials = (fullName) => {
    const names = fullName.split(' ');
    const initials = names.map(name => name.charAt(0)).join('');
    return initials.length > 2 ? initials.slice(0, 2) : initials.toUpperCase();
}

export default getInitials;