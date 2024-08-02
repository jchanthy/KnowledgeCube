const getInitials = (fullName) => {
    const names = fullName.split(' ');
    const initials = names.map(name => name.charAt(0)).join('');
    if (initials.length > 2) {
        return initials.slice(0, 2);
    }
    return (
        <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>{initials.toUpperCase}</span>
            </div>
        </div>
    )
}

export default getInitials;