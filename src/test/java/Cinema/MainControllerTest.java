package Cinema;

import Cinema.model.Cinema;
import Cinema.model.User;
import Cinema.repository.CinemaRepository;
import Cinema.rest.CinemaController;
import Cinema.service.CinemaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@TestPropertySource("/application.properties")
@WithUserDetails(value = "1")
@SpringBootTest
public class MainControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CinemaController cinemaController;

    @Test
    public void getCinemaListTest() throws Exception {
        this.mockMvc.perform(get("/rest/cinemas"))
                .andExpect(authenticated())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].cinema_id").exists())
                .andExpect(jsonPath("$[0].cinema_id").value(2))
                .andExpect(jsonPath("$[*].cinema_id").isNotEmpty())
                .andDo(print());
    }

    @Test
    public void getCinemaById() throws Exception {
        mockMvc.perform(get("/rest/cinemas/{id}", 2)
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.cinema_id").value(2));
    }

    @Test
    public void addCinemasTest() throws Exception {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Cinema testCinema = new Cinema(-1L, "Test Cinema", user);
        given(cinemaController.createCinema(any(Cinema.class), any(User.class))).willReturn(ResponseEntity.status(201).body(testCinema));
        this.mockMvc.perform(post("/rest/cinemas")
                .content(asJsonString(testCinema))
                .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(authenticated())
                .andExpect(status().isCreated())
                .andExpect(content().json(asJsonString(testCinema)));
    }

    @Test
    public void updateCinemaTest() throws Exception {
        Cinema cinema = cinemaController.getCinemas().get(0);
        cinema.setName("TestTest");
        this.mockMvc.perform(put("/rest/cinemas")
                .content(asJsonString(cinema))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isCreated())
                .andExpect(authenticated())
                .andExpect(jsonPath("$.cinema_id").exists());
    }


    private static String asJsonString(final Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

