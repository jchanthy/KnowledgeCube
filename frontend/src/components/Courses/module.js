import React from 'react';

const Module = ({
                    module,
                    index,
                    onRemove,
                    onEdit,
                    renderModuleDetails = () => null,
                }) => {
    return (
        <div>
            <h2>Module {module.id}</h2>
            {renderModuleDetails(module)}
            <button onClick={() => onRemove(index)}>Remove Module</button>
            <button onClick={() => onEdit(index)}>Edit Module</button>
        </div>
    );
};

export default Module;