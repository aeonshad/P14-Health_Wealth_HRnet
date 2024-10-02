import { useForm } from 'react-hook-form';
import { departmentList } from '../data/departments';
import { statesList } from '../data/states';

function Form() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log({ data });
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-2/5">
                    <label className="text-sm font-medium leading-none" htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="firstname"
                        name="firstname"
                        {...register('firstname')}
                        placeholder="Example: John"
                    />
                </div>
                <div className="space-y-2 w-2/5">
                    <label className="text-sm font-medium leading-none" htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="lastname"
                        name="lastname"
                        {...register('lastname')}
                        placeholder="Example: Doe"
                    />
                </div>
                <div className="space-y-2 w-1/5">
                    <label className="text-sm font-medium leading-none" htmlFor="dateOfBirth">
                        Date of Birth
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        {...register('dateOfBirth')}
                    />
                </div>
            </fieldset>
            <hr className="h-px my-1 border-border" />
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-4/5">
                    <label className="text-sm font-medium leading-none" htmlFor="street">
                        Street
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="street"
                        name="street"
                        {...register('street')}
                        placeholder="Example: 123 Main St"
                    />
                </div>
                <div className="space-y-2 w-1/5">
                    <label className="text-sm font-medium leading-none" htmlFor="zipCode">
                        Zip code
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        {...register('zipCode')}
                        placeholder="XXXXX"
                    />
                </div>
            </fieldset>
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-1/2">
                    <span className="text-sm font-medium leading-none">State</span>
                    <select
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        {...register('state')}
                    >
                        {statesList.map((state) => (
                            <option key={state.id} value={state.name}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2 w-1/2">
                    <label className="text-sm font-medium leading-none" htmlFor="city">
                        City
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="city"
                        name="city"
                        {...register('city')}
                        placeholder="Example: San Francisco"
                    />
                </div>
            </fieldset>
            <hr className="h-px my-1 border-border" />
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-1/2">
                    <span className="text-sm font-medium leading-none">Department</span>
                    <select
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        {...register('department')}
                    >
                        {departmentList.map((department) => (
                            <option key={department.id} value={department.name}>
                                {department.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2 w-1/2">
                    <label className="text-sm font-medium leading-none" htmlFor="startDate">
                        Start Date
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        id="startDate"
                        name="startDate"
                        {...register('startDate')}
                    />
                </div>
            </fieldset>
            <div className="flex gap-4 justify-end mt-2">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-1/7"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default Form;
