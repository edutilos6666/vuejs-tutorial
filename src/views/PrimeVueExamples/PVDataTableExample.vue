<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>PVDataTable - Templating</h1>
        <p>Custom content at header, body and footer sections are supported via templating.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <PVDataTable :value="cars">
        <template #header>
          <div style="line-height:1.87em" class="clearfix">
            <PVButton icon="pi pi-refresh" style="float: left"/>List of Cars
          </div>
        </template>
        <PVColumn field="vin" header="Vin"></PVColumn>
        <PVColumn field="year" header="Year"></PVColumn>
        <PVColumn field="brand" header="Brand">
          <template #body="slotProps">
            <img
              :src="'demo/images/car/' + slotProps.data.brand + '.png'"
              :alt="slotProps.data.brand"
              width="48px"
            >
          </template>
        </PVColumn>
        <PVColumn field="color" header="Color"></PVColumn>
        <PVColumn headerStyle="width: 8em" bodyStyle="text-align: center">
          <template #header>
            <PVButton type="PVButton" icon="pi pi-cog"></PVButton>
          </template>
          <template #body="slotProps">
            <PVButton
              type="PVButton"
              icon="pi pi-search"
              class="p-PVButton-success"
              style="margin-right: .5em"
            ></PVButton>
            <PVButton type="PVButton" icon="pi pi-pencil" class="p-PVButton-warning"></PVButton>
          </template>
        </PVColumn>
        <template #footer>In total there are {{cars ? cars.length : 0 }} cars.</template>
      </PVDataTable>
    </div>
  </div>
</template>
<script>
import CarService from "../../service/CarService";

export default {
  data() {
    return {
      cars: null
    };
  },
  carService: null,
  created() {
    this.carService = new CarService();
  },
  mounted() {
    this.carService.getCarsSmall().then(data => (this.cars = data));
  },
  components: {}
};
</script>