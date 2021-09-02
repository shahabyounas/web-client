import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import format from 'date-fns/format'
import DatePicker from 'react-datepicker';
import { CalendarIcon, PlusIcon, TrashIcon, ClockIcon } from '../../components/Svgs';
import multipleEventsImage from '../../assets/images/event-frequency-multiple.png';
import singleEventImage from '../../assets/images/event-frequency-single.png';


export const EventType = ({ image, title, type, state, setState }) => (
    <>
        <div className="d-flex flex-column">
            <div
                className={`d-flex justify-content-center align-items-center typeCard typeCard--${type === state.eventFrequency ? 'selected' : ''}`}
                onClick={(e) => setState({ target: { name: "eventFrequency", value: type } })}
            >
                <img src={image} alt="event type image" width="100" height="100" />
            </div>

            <div className="mt-3" style={{ textAlign: 'center' }}>
                <div>{title}</div>
            </div>
        </div>
    </>
)

const StepTwo = (props) => {

    const { state, setState } = props;

    const [categories] = useState([
        { value: 'health', label: 'health' },
        { value: 'wellness', label: 'wellness' },
        { value: 'fitness', label: 'fitness' },
    ]);

    const handleDateChange = (date) => {
        setState({ target: { name: "startDate", value: date } })
        setIsOpenDatePicker(isOpen => !isOpen);
    };

    const [schedules, setSchedule] = useState(() => {
        const schedules = [
            {
                "day": "SUN",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            },
            {
                "day": "MON",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            },
            {
                "day": "TUE",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            },
            {
                "day": "WED",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            },
            {
                "day": "THU",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            },
            {
                "day": "FRI",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            },
            {
                "day": "SAT",
                "isSelected": false,
                "bookedSlots": [{ start: '00:00', end: '00:00' }]
            }
        ]
        return schedules;
    })

    useEffect(() => {

        const filteredSchedules = schedules.filter((schedule) => schedule.isSelected);
        setState({ target: { name: "schedules", value: filteredSchedules } })

    }, [schedules])


    const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

    const radioButtons = [
        {
            value: 30,
        },
        {
            value: 45,
        },
        {
            value: 60,
        },
        {
            value: 90,
        },
        {
            value: 120,
        }
    ]


    const handleDurationChange = (e) => {
        const value = parseInt(e.target.value);
        setState({ target: { name: "duration", value } })
    }

    if (state.currentStep !== 2) {
        return null;
    }

    const handleTimeChange = ({ date, day, index, time }) => {
        const selectedTime = format(date, 'HH:mm')
        setSchedule(schedules => {
            return schedules.map(schedule => {
                if (schedule.day === day) {
                    schedule.bookedSlots[index][time] = selectedTime;
                    return schedule
                }
                return schedule;
            })
        })
    }

    const handleDeleteTime = ({ day, index }) => {

        if (index === 0) {
            return;
        }

        setSchedule(schedules => {
            return schedules.map(schedule => {
                if (schedule.day === day) {
                    schedule.bookedSlots.pop(index)
                    return schedule
                }
                return schedule;
            })
        })
    }

    const handleAddTime = ({ day }) => {

        setSchedule(schedules => {
            return schedules.map(schedule => {
                if (schedule.day === day) {
                    schedule.bookedSlots.length <= 5 && schedule.bookedSlots.push({ start: '00:00', end: '00:00' });
                    return schedule
                }
                return schedule;
            })
        })
    }

    const handleSelectDay = (day) => {
        setSchedule(schedule => {
            return schedule.map(schedule => {
                if (schedule.day === day) {
                    schedule.isSelected = !schedule.isSelected;
                    return schedule;
                }
                return schedule;
            })
        })
    }

    const eventTypes = [
        {
            image: singleEventImage,
            title: 'Single Event',
            type: 'single',
        },
        {
            image: multipleEventsImage,
            title: 'Multiple Event',
            type: 'multiple',
        }
    ]


    const EventTimes = (props) => {
        const { label, hour, type } = props;

        return (<div className="d-flex border py-1 px-3 border-radius-sm small">
            <div className="align-self-center"> <ClockIcon /> </div>
            <div className="mx-3">
                <div className="d-flex">
                    <div className="text-muted">{label}</div>
                    <div className="mx-3" style={{ color: '#FF7D7D', fontSize: '1rem' }} > * </div>
                </div>
                <div>
                    <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat="HH:mm"
                        dateFormat="HH:mm"
                        className="timePicker no-border"
                        value={hour}
                        onChange={(date) => setState({ target: { name: type, value: format(date, 'HH:mm') } })}
                    />
                </div>
            </div>
        </div>)
    }


    return (
        <div className="d-flex flex-column">

            {state.type !== 'one-one' && (

                <div>
                    <div> Event Frequency </div>
                    <div className="d-flex justify-content-between mt-2">
                        {eventTypes.map((etype, idx) => <EventType {...etype} state={state} setState={setState} key={idx.toString()} />)}
                    </div>
                </div>
            )}

            <div className="mt-3">
                <label htmlFor="eventName" className="form-label"> Start Date </label>
                <div className="d-flex p-2 dateInput">
                    <div className="px-2 align-self-center" style={{ cursor: 'pointer' }} onClick={() => setIsOpenDatePicker(isOpen => !isOpen)}>
                        <CalendarIcon />
                    </div>

                    <div>
                        <div className="small"> Start Date </div>
                        {state.startDate ? format(state.startDate, 'dd MMM yyyy') : <div className="small text-muted"> Your audience can book this event starting from </div>}
                    </div>
                </div>
                <DatePicker
                    selected={state.startDate}
                    open={isOpenDatePicker}
                    onChange={(date) => handleDateChange(date)}
                    showPopperArrow={false}
                    dateFormat="dd MMM yyyy"
                    name="startDate"
                    customInput={<span hidden>  </span>}
                />
            </div>

            {state.type === 'one-one' ? (
                <>
                    <div>
                        <div> Duration </div>
                        <div className="d-flex flex-wrap mt-2">
                            {radioButtons.map((duration, idx) => (
                                <label className="mx-1 small" key={idx.toString()}>
                                    <input
                                        type="radio"
                                        value={duration.value}
                                        checked={state.duration === duration.value}
                                        onChange={(e) => handleDurationChange(e)}
                                        className="m-3"
                                    />
                                    {`${duration.value} mins`}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="my-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"> Schedule </label>

                        <div className="scheduleTable">
                            <div className="d-flex justify-content-between px-4 py-2">
                                <div> Set your availability</div>
                                <div> Dubai time</div>
                            </div>

                            <div className="d-flex flex-column">
                                {schedules.map((schedule, idx) => (
                                    <div className="d-flex align-items-start py-3 dayRow" key={idx.toString()}>
                                        <label className="mx-1 mt-1 small" key={idx.toString()}>
                                            <input
                                                type="checkbox"
                                                value={schedule.isSelected}
                                                checked={schedules.find(s => s.day === schedule.day).isSelected}
                                                onChange={() => handleSelectDay(schedule.day)}
                                                // name={schedule.day}
                                                className="px-3 mx-3"
                                            />
                                        </label>
                                        <div className="small mt-1" style={{ fontWeight: 'bold', width: '2rem' }}>{schedule.day}</div>
                                        <div className="d-flex flex-column align-items-start mx-4">
                                            {schedule.bookedSlots.map((time, idx) => (
                                                <div className={`d-flex ${idx > 0 && 'mt-3'}`} key={idx.toString()}>
                                                    <DatePicker
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeFormat="HH:mm"
                                                        dateFormat="HH:mm"
                                                        className="timePicker"
                                                        value={time.start}
                                                        onChange={(date) => handleTimeChange({ date, day: schedule.day, index: idx, time: 'start' })}
                                                    />
                                                    <span className="mx-2"> -</span>
                                                    <DatePicker
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeFormat="HH:mm"
                                                        dateFormat="HH:mm"
                                                        className="timePicker"
                                                        value={time.end}
                                                        onChange={(date) => handleTimeChange({ date, day: schedule.day, index: idx, time: 'end' })}
                                                    />

                                                    <div className="d-flex justify-content-between mx-3">
                                                        <span onClick={() => handleDeleteTime({ day: schedule.day, index: idx })}><TrashIcon /> </span>
                                                        <span className="mx-4" onClick={() => handleAddTime({ day: schedule.day, index: idx })}><PlusIcon /> </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="my-3">
                        <h6> Increment </h6>
                        <label className="small text-muted"> Show available time slot with increments of </label>
                        <DatePicker
                            showTimeSelect
                            showTimeSelectOnly
                            timeFormat="HH:mm"
                            dateFormat="HH:mm"
                            className="form-control slotPicker"
                            value={format(state.increment, 'HH:mm')}
                            onChange={(increment) => setState({ target: { name: "increment", value: increment } })}
                        />
                    </div>

                </>

            ) :
                (<div>
                    <div className="d-flex justify-content-between">
                        <EventTimes type="eventStartTime" label="Start Time" hour={state.eventStartTime} />
                        <EventTimes type="eventEndTime" label="End Time" hour={state.eventEndTime} />
                    </div>

                    <div className="border my-3 p-3 border-radius-sm small text-muted" style={{ backgroundColor: '#F2F3FF' }}>
                        For multiple events, you can schedule additional events in the next steps
                </div>

                </div>)}

            <div className="my-3">
                <h6> Categories </h6>
                <Select
                    value={state.categories}
                    onChange={(categories) => setState({ target: { name: "categories", value: categories } })}
                    options={categories}
                    isMulti
                    isClearable={false}
                    placeholder="Add up to 5 categories to your event"
                />
            </div>

            {state.type !== 'one-one' &&
                (<div className="my-3">
                    <h6> Co-host </h6>
                    <input
                        className="form-control"
                        value={state.host}
                        placeholder="Type the email of your co-host"
                        onChange={(e) => setState({ target: { name: "host", value: e.target.value } })}
                    />
                </div>)}
        </div>
    )
}

export default React.memo(StepTwo);