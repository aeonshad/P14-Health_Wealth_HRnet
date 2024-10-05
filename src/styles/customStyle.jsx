export const tableCustomStyles = {
    table: {
        style: {
            backgroundColor: 'hsl(var(--card))', // theme.background.default
            borderRadius: '0.4rem 0.4rem 0px 0px',
        },
    },
    header: {
        style: {
            backgroundColor: 'hsl(var(--primary))', // theme.background.default
            marginTop: '50px',
        },
    },
    subHeader: {
        style: {
            backgroundColor: 'transparent', // theme.background.default
            minHeight: '0px',
            padding: '0px',
            marginBottom: '10px',
            marginTop: '0px',
        },
    },
    headRow: {
        style: {
            backgroundColor: 'hsl(var(--primary))',
            minHeight: '52px',
            borderBottomWidth: '1px',
            borderBottomColor: 'hsl(var(--border))', // theme.divider.default
            borderBottomStyle: 'solid',
            fontSize: '0.875rem',
            fontWeight: 700,
            borderRadius: '0.4rem 0.4rem 0px 0px',
        },
        denseStyle: {
            minHeight: '32px',
        },
    },
    headCells: {
        style: {
            color: 'hsl(var(--primary-foreground))',
            opacity: '1',
            '&:hover': {
                opacity: '0.9',
            },
        },
        draggingStyle: {
            cursor: 'move',
        },
    },
    cells: {
        style: {
            wordBreak: 'break-word',
        },
        draggingStyle: {},
    },
    rows: {
        style: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: 'hsl(var(--foreground))', // theme.text.primary
            backgroundColor: 'hsl(var(--card))', // theme.background.default
            minHeight: '48px',
            '&:not(:last-of-type)': {
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: 'hsl(var(--border))', // theme.divider.default
            },
        },
        denseStyle: {
            minHeight: '32px',
        },
        highlightOnHoverStyle: {
            color: 'hsl(var(--secondary-foreground))', // theme.highlightOnHover.text
            backgroundColor: 'hsl(var(--secondary))', // theme.highlightOnHover.default
            transitionDuration: '0.15s',
            transitionProperty: 'background-color',
        },
    },
    pagination: {
        style: {
            color: 'hsl(var(--card-foreground))', // theme.text.secondary
            fontSize: '0.8rem',
            minHeight: '56px',
            backgroundColor: 'hsl(var(--card))', // theme.background.default
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: 'hsl(var(--border))', // theme.divider.default
            borderRadius: '0px 0px 0.4rem 0.4rem',
        },
        pageButtonsStyle: {
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            padding: '8px',
            margin: 'px',
            cursor: 'pointer',
            transition: '0.4s',
            color: 'hsl(var(--primary))', // theme.button.default
            fill: 'hsl(var(--primary))', // theme.button.default
            backgroundColor: 'transparent',
            '&:disabled': {
                cursor: 'unset',
                color: 'hsl(var(--background))', // theme.button.disabled
                fill: 'hsl(var(--background))', // theme.button.disabled
            },
            '&:hover:not(:disabled)': {
                backgroundColor: 'hsl(var(--background))', // theme.button.hover
                fill: 'hsl(var(--foreground))',
            },
            '&:focus': {
                outline: 'none',
                backgroundColor: 'hsl(var(--background))', // theme.button.focus
                fill: 'hsl(var(--foreground))',
            },
        },
    },
    noData: {
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--card-foreground))', // theme.text.primary
            backgroundColor: 'hsl(var(--card))', // theme.background.default
        },
    },
};
