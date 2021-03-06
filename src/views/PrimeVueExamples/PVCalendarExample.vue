<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>PVCalendar</h1>
        <p>PVCalendar is an input component to select a date.</p>
      </div>
    </div>

    <div class="content-section implementation" style="padding-top:0">
      <div class="p-grid p-fluid">
        <div class="p-col-12 p-md-4">
          <h3>Basic</h3>
          <PVCalendar v-model="date1"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Spanish</h3>
          <PVCalendar v-model="date2" :locale="es" dateFormat="dd/mm/yy"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Icon</h3>
          <PVCalendar v-model="date3" :showIcon="true"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Min-Max</h3>
          <PVCalendar v-model="date4" :minDate="minDate" :maxDate="maxDate" :manualInput="false"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Disable Days</h3>
          <PVCalendar
            v-model="date5"
            :disabledDates="invalidDates"
            :disabledDays="[0,6]"
            :manualInput="false"
          />
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Navigators</h3>
          <PVCalendar
            v-model="date6"
            :monthNavigator="true"
            :yearNavigator="true"
            yearRange="2000:2030"
          />
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Multiple</h3>
          <PVCalendar v-model="dates1" selectionMode="multiple" :manualInput="false"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Range</h3>
          <PVCalendar v-model="dates2" selectionMode="range" :manualInput="false"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Button Bar</h3>
          <PVCalendar v-model="date7" :showButtonBar="true"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Time / 24h</h3>
          <PVCalendar v-model="date8" :showTime="true" :showSeconds="true"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Time Only / 12h</h3>
          <PVCalendar v-model="date9" :timeOnly="true" hourFormat="12"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Month/Year Picker</h3>
          <PVCalendar
            v-model="date10"
            view="month"
            dateFormat="mm/yy"
            :yearNavigator="true"
            yearRange="2000:2030"
          />
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Multiple Months</h3>
          <PVCalendar v-model="date11" :numberOfMonths="3"/>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Date Template</h3>
          <PVCalendar v-model="date12">
            <template #date="slotProps">
              <div
                v-if="slotProps.date.day > 10 && slotProps.date.day < 15"
                class="special-day"
              >{{slotProps.date.day}}</div>
              <span v-else>{{slotProps.date.day}}</span>
            </template>
          </PVCalendar>
        </div>
        <div class="p-col-12 p-md-4">
          <h3>Touch UI</h3>
          <PVCalendar v-model="date13" :touchUI="true"/>
        </div>
      </div>

      <h3>Inline</h3>
      <PVCalendar v-model="date14" :inline="true" :showWeek="true"/>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  },
  data() {
    return {
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      date7: null,
      date8: null,
      date9: null,
      date10: null,
      date11: null,
      date12: null,
      date13: null,
      date14: null,
      dates1: null,
      dates2: null,
      es: {
        firstDayOfWeek: 1,
        dayNames: [
          "Domingo",
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado"
        ],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ],
        monthNamesShort: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic"
        ],
        today: "Hoy",
        clear: "Borrar",
        weekHeader: "Sm"
      },
      minDate: null,
      maxDate: null,
      invalidDates: null
    };
  },
  components: {}
};
</script>

<style scoped>
.special-day {
  background-color: #1dcbb3;
  color: #ffffff;
  font-weight: bold;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  line-height: 2em;
  padding: 0;
  display: inline-block;
}
</style>